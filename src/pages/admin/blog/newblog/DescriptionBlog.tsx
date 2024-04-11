import { useLocation, useNavigate } from "react-router-dom";
import { Blog, optionBlog, BlogKeys } from "./blogs.data";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import ReactPlayer from 'react-player';
import './descriptionblog.css';
const DescriptionBlog = () => {
    const { state } = useLocation()
    const navigate = useNavigate();
    const post: Blog = optionBlog[state as BlogKeys];

    const textIsArray = (text: string | string[]): string | any => {
        if (Array.isArray(text)) {
            return (text.map((listText: string) => (
                <p className="mb-4">*{listText}</p>
            )))
        } else {
            return text
        }
    }

    return (
        <div className="flex flex-col items-center justify-start w-full h-auto px-16 bg-gray-300">

            <Box sx={{ display: { sm: 'none', md: 'flex' }, width: '100%', marginY: '2rem'}}>
                <Breadcrumb className=" font-semibold">
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => navigate(-1)} className="hover:bg-white rounded-lg px-4 py-2 !no-underline">Blog</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => navigate(-1)} className="hover:bg-white rounded-lg px-4 py-2 !no-underline">{post.category}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>{post.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <div className="bg-white w-full px-8 py-4 mb-4 rounded-xl shadow-xl">
                <p className="font-bold text-xl">Indice</p>
                <ol className="ml-4">
                    {post.index && post.index.map((list: string, ind: number) => (
                        <li>{ind + 1} - {list}</li>
                    ))}
                </ol>
            </div>

            <div className="text-justify my-5 text-lg">
                {post.description}
            </div>

            {post.descriptionOne && (
                <div className="text-justify my-5 text-lg w-full">
                    <h2 className="font-bold text-xl">1 - {post.descriptionOne.title}</h2>
                    <p>{post.descriptionOne.text}</p>
                </div>
            )}

            <div className="flex items-center justify-around flex-wrap w-full gap-5 my-8">
                {post.imageOne && post.imageOne.map(img => (
                    <p className="w-[10rem] h-[10rem] border-2 border-solid border-black">Imagen: {img}</p>
                ))}
            </div>

            {post.descriptionTwo && (
                <div className="text-justify my-5 text-lg w-full">
                    {post.descriptionTwo.title && (
                        <h2 className="font-bold text-xl">2 - {post.descriptionTwo.title}</h2>
                    )}
                    {textIsArray(post.descriptionTwo.text)}
                </div>
            )}

            <div className="flex items-center justify-around flex-wrap w-full gap-5 my-8">
                {post.imageTwo && post.imageTwo.map(img => (
                    <p className="w-[10rem] h-[10rem] border-2 border-solid border-black">Imagen: {img}</p>
                ))}
            </div>

            {post.descriptionThree && (
                <div className="text-justify my-5 text-lg w-full">
                    {post.descriptionThree.title && (
                        <h2 className="font-bold text-xl">3 - {post.descriptionThree.title}</h2>
                    )}
                    {textIsArray(post.descriptionThree.text)}
                </div>
            )}

            <div className="flex items-center justify-around flex-wrap w-full gap-5 my-8">
                {post.imageThree && post.imageThree.map(img => (
                    <p className="w-[10rem] h-[10rem] border-2 border-solid border-black">Imagen: {img}</p>
                ))}
            </div>

            <Box sx={{ display: 'flex', width: '100%', marginY: 8 }}>
                <ReactPlayer
                    url={post.urlVideo}
                    width="100%"
                    controls={true}
                />
            </Box>
        </div>
    )
}

export default DescriptionBlog