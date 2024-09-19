import posts from "@/data/posts";
import Link from "next/link";
import { Post } from "@/types/post";

import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading1 } from "lucide-react";

export interface PostsTableProps {
  title?: string;
  limit?: number;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // sort post in descending order base on date
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // fliter posts based on limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="h3 text-semibold text-2xl mb-4">{title || "Posts"}</h3>
      <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post: Post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
