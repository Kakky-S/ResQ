import React from 'react';
import { useHistory } from "react-router-dom";
import defaultDataset from "../../dataset";
import '../../assets/styles/style.css';
import { AnswersList,Chats } from "../index";
import FormDialog from '../Forms/FormDialog';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      case (nextQuestionId === 'contact'):
        this.handleClickOpen();
        break;
      //case (/^https:*/.test(nextQuestionId)):
        /* const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click(); */
        //break;
      case (nextQuestionId === 'answer'):
        const b = document.createElement('a');
        b.href = "http://localhost:3000/ChatBot/Whiplash";
        b.click();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
      text: selectedAnswer,
      type: 'answer'
    })

    this.setState({
      chats: chats
    })
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  }

handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render(){
    return (
      <section className="c-section" >
        <header className="h-header">
        <p className="h-title">ResQ</p>
        </header>
        <div className="c-flex">
        <div className="nav-conteiner">
          <nav className="c-nav">
              <ul className="c-List">
              <li className="c-ListItem"> <a href="/">HOME</a></li>
              <li className="c-ListItem"><a href="#">お気に入り</a></li>
              <li className="c-ListItem"><a href="#">診察履歴</a></li>
            </ul>
            <button className="c-NavButton">近くの<br />整骨院・整形外科を <br/>調べる</button>
          </nav>
        </div>
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose}/>
          </div>
          </div>

      </section>
    );
  }
}
