import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";
import React from "react";


const NotesNotFound = () => {
  return (
    <div className="flex flex-col   items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center ">
        <div className="bg-primary/70 rounded-full p-8">
        <NotebookIcon className="size-12 text-primary"/>
        </div>
    <h3 className="text-2xl font-bold">No Notes yet!</h3>
    <p className="text-base-content/70">You haven't created any notes yet. Create your first note now   .</p>
    <Link to="/create" className="btn btn-primary ">Create Your First Note</Link>
    </div>
  )
}

export default NotesNotFound;
