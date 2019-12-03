import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Example from '../page2'
export default class Page1 extends Component {
    render() {
        return (
            <div>
                this is home~hi xht
                <Link to='page1'>page1</Link>
                <Example num={0} />
            </div>
        )
    }
}
