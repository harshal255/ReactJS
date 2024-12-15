import { useParams } from 'react-router-dom';
import books from '../../apis/books';

export default function Book() {
    const { bookId } = useParams();
    console.log(bookId);

    const newFavBook = books.find((book) => book.id === bookId);

    if (!newFavBook) {
        return <p>{`This page doesn't contain fav Books`}</p>
    }
    return (
        <main className='flex min-h-screen w-full items-center justify-center max-w-[1440px]'>
            {newFavBook && (
                <main className='flex flex-col gap-10 text-2xl font-semibold text-zinc-100'>
                    <p>{`Title: ${newFavBook.title}`}</p>
                    <p>{`By: ${newFavBook.author}`}</p>
                    <p>{`Year: ${newFavBook.year}`}</p>
                    <p>{`Description: ${newFavBook.description}`}</p>
                </main>
            )}
        </main>
    )
}