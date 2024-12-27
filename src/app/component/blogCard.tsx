import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from './ui/card';

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={500}
        height={250}
        className="object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-semibold mt-4 text-center">{post.title}</CardTitle>
      <CardContent className="text-center mt-2">
        <p className="text-sm">{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <Link
          href={`/post/${post.id}`}
          className={`w-full px-6 py-2 text-white bg-slate-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500' : 'bg-black hover:bg-red-500'}`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}
