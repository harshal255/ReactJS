import { Component } from "react";
import Child from "./Child";
import React from "../React";
import Vite from "../Vite";

class Parent extends Component {

    constructor() {
        //Constructor gets called when the component is initiated. This is where you initiate the component's properties. In React we have states which update on page without reload. Constructor properties are kept in state.
        // We also need to add super() statement, which executes the parent component's constructor and component gets access to all the functions of the parent component
        super();
        this.state = { logo: 0 };
        // console.log(this);
        //  { props: undefined, context: undefined, refs: {}, updater: {…}, state: {…} }
        console.log("parent class called");
    }

    changeLogo() {
        //you can change state using this method
        this.state.logo === 0 ? this.setState({ ...this.state, logo: 1 }) : this.setState({ ...this.state, logo: 0 })
    }

    componentDidMount() {
        console.log("component did mount")
    }
    componentDidUpdate() {
        console.log("component did updated");
    }
    componentWillUnmount() {
        console.log("component did unmount");
    }


    render() {
        return (
            <div className="m-10 p-10 border border-purple-200 rounded-xl w-1/2 text-3xl text-purple-500 flex flex-col gap-5 items-center" key={"class parent"}>
                <div>Class based Parent Component</div>

                <div className="flex items-center justify-center gap-5">
                    {this.state.logo === 0 ? <React /> : <Vite />}
                </div>

                <Child />
                <div className="flex items-center justify-around">
                    <button onClick={() => this.changeLogo()} className="text-lg bg-black w-fit px-5 py-2 rounded-lg">
                        Change Logo
                    </button>
                </div>

            </div>
        );
    }
}

export default Parent;
