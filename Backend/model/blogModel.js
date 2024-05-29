import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String ,
            required: true,
        },
        author: {
            type : String , 
            required:true ,
        },
        PublishYear : {
            type : Number, 
            required:true,
        },
    },
    {
        timestamps: true, 
    }
)

export const Blog = mongoose.model('blog',blogSchema);