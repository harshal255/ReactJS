// import React from "react";

import { Component } from "react";
import React from "../React";
import { modalContext } from "../../contexts/modalContext";
import ModalBox from "../Customs/ModalBox";

class ErrorPage extends Component {

    static contextType = modalContext;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log("e", error);
        this.setState({
            error:error.toString(),
            errorInfo
        });
    }

    render() {
        const { openModal } = this.context;
        console.log(this.state);
        if (openModal) {
            return (
                <>
                    <ModalBox>
                        <div className="flex flex-col gap-10">
                            <h1 className="text-4xl text-red-500 font-medium">{this.state?.error}</h1>
                        </div>
                    </ModalBox>
                    {this.props.children}
                </>
            )
        }
        return this.props.children;
    }
}

export default ErrorPage;
