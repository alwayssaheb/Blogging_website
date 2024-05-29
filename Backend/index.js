// import express, { request, response } from 'express'
// import { PORT, MongodbURL } from './config.js';
// import mongoose from 'mongoose';
// import { Blog } from './model/blogModel.js';
// import cors from 'cors';
// const app = express();


// app.use(express.json());
// app.use(cors());

// app.get('/',(request,response) => {
//     console.log(request);
//     return response.send("the respnose");
// })
// app.post('/books', async (req, res) => {
//     try {
//         const newBlog = {
//             title: req.body.title,
//             author : req.body.author,
//             PublishYear : req.body.PublishYear,
//         };
//         const blog = Blog.create(newBlog);

//         return res.status(201).send(newBlog);
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send({message:error.message});
//     }
// })

// app.get('/blogs',async (req,res) => {
//     try {
//         const blogs = await Blog.find({});
//         return res.status(201).send(blogs);
//     }
//     catch{
        
//     }
// });

// app.get('/books/:id', async(request,response ) => {
//     const {id} = request.params ;

//     const blog = await Blog.findById(id);

//     return response.status(200).json(blog);
// }) 
// app.put('/books/:id', async (request,response) => {
//     try{
//         if(
//             !request.body.title || 
//             !request.body.author || 
//             !request.body.PublishYear 
//         ) {
//             return response.status(400).send({
//                 message: 'send all the required fields : title, author, publishyear',
//             });
//         }
//         const {id} = request.params;
//         const result = await Blog.findByIdAndUpdate(id, request.body);

//         if(!result){
//             return response.status(404).json({message:'book not found'});
//         }
//         return response.status(200).send({message:'book updated successfully'})
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message});
//     }
// })

// app.delete('/books/:id', async (request,response) => {
//     try {
//         const {id} = request.params;
//         const result = await Blog.findByIdAndDelete(id);

//         if(!result){
//             return response.status(404).json({message:'book not found'});
//         }
//         return response.status(201).send({message:'the book is deleted succesfuly'});
//     }

//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message})
//     }
// });

// app.listen(PORT, () => {
//     console.log("app is listenening to the port");
// });

// mongoose.connect(MongodbURL)
// .then(()=>{
//     console.log("the application is connected to the database");
// })
// .catch((error)=>{
//     console.log(error);
// })

// ***************************************************************************************//

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import { PORT, MongodbURL } from './config.js';
import { Blog } from './model/blogModel.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Static file serving
const __dirname = path.resolve(); // Needed for ES module syntax
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// API Routes
app.get('/', (req, res) => {
  return res.send("the response");
});

app.post('/books', async (req, res) => {
  try {
    const newBlog = {
      title: req.body.title,
      author: req.body.author,
      PublishYear: req.body.PublishYear,
    };
    const blog = await Blog.create(newBlog);
    return res.status(201).send(blog);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).send(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.PublishYear) {
      return res.status(400).send({
        message: 'send all the required fields: title, author, publish year',
      });
    }
    const { id } = req.params;
    const result = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      return res.status(404).json({ message: 'book not found' });
    }
    return res.status(200).send({ message: 'book updated successfully', result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'book not found' });
    }
    return res.status(200).send({ message: 'the book is deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Serve React build files for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(MongodbURL)
  .then(() => {
    console.log('The application is connected to the database');
  })
  .catch((error) => {
    console.log(error);
  });
