import React from 'react'
import { Link } from 'react-router-dom'
import books from '../apis/books'


export default function Books() {
    return (
        <div className='flex flex-col gap-10 w-full min-h-screen items-center justify-center'>
            <h1 className="text-4xl text-zinc-500 font-bold">Different Kinds of Books</h1>
            <div className="flex flex-col gap-3 items-center">
                {
                    books && books.map((book) => (
                        <ul key={book.id}>
                            <li>
                                <Link to={`${book.id}`} className='text-3xl capitalize text-zinc-200 hover:text-zinc-300'>{book.title}</Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}