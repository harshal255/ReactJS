import { PureComponent } from 'react'

class Child extends PureComponent {
    //we extends  child component from  pureComponent instead of Component to prevent re-rendering
    constructor() {
        super();
        console.log("child class called");
    }

    componentDidMount() {
        console.log("child class component did mount")
    }
    componentDidUpdate() {
        console.log("child class component did updated");
    }
    componentWillUnmount() {
        console.log("child class component did unmount");
    }
    render() {
        return (
            <div className="border border-red-400 rounded-xl flex w-full items-center justify-center py-20 p-10 text-3xl">
               Class based Child Component
            </div>
        )
    }
}

export default Child;
