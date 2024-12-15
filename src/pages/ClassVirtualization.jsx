import Parent from "../components/ClassBased/Parent";


const ClassVirtualization = () => {

    return (
        <div className="w-[99dvw] flex flex-col gap-3 items-center py-10" key={"class key"}>
            <h1 className="text-5xl font-bold">Class Based Components</h1>
            <Parent />
        </div>
    );
}

export default ClassVirtualization;
