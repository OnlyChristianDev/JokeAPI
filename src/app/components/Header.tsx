import { GiClown } from "react-icons/gi";

export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
                <h1 className="font-semibold text-3xl">JokeSpin.</h1>
                <GiClown className="text-4xl" />
            </div>
            <button className="bg-pink-800 w-40 p-2 rounded-lg font-semibold"> Nova Piada </button>
        </header>
    )
}
