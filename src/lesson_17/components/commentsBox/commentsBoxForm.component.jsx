import * as React from 'react';

export class CommentsBoxForm extends React.Component{
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }

    }
    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetState();
    }


    resetState() {
        this.setState ({
            author: '',
            text: ''
        })
    }
    onAuthorChange(e) {
        console.log(e.target.value);
        const author = e.target.value;
        this.setState((oldstate) => {
            const newState = Object.assign({}, oldstate);
            newState.author = author;
            return newState;
        })
    }

    onTextChange(e) {
        console.log(e.target.value);
        const text = e.target.value;
        this.setState((oldstate) => {
            const newState = Object.assign({}, oldstate);
            newState.text = text;
            return newState;
        })
    }

    render() {
        return <form className="comments-box__form" onSubmit={this.submit.bind(this)}>
            <input
                className={'comments-box__input'}
                type="text"
                placeholder={'enter your name'}
                onInput={this.onAuthorChange.bind(this)}
                value={this.state.author}/>

            <textarea
                className={'comments-box__textarea'}
                id=""
                cols="30"
                rows="10"
                value={this.state.text}
                placeholder={'enter your comment'}
                onInput={this.onTextChange.bind(this)} >
            </textarea>

            <button
                className={'comments-box__btn'}
            >Add comment</button>
        </form>
    }
}