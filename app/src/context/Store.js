import React, { Component, createContext } from 'react'
export const StoreContext = createContext()

export default class StoreProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabHeader: '/',
            setTabHeader: this.setTabHeader,
        }
    }

    setTabHeader = (tabHeader) => {
        this.setState({tabHeader})
    }

    render() {
        return (
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}