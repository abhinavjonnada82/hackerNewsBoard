import React, { Component } from "react";
import Axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
let prev = 0;
let next = 0;
let last = 0;
let first = 0;

const HackNews = props => (
  <tr>
    <td>{props.hacknews.by}</td>
    <td>{props.hacknews.title}</td>
    <td>
      <a href={props.hacknews.url}>Link</a>
    </td>
    <td>{props.hacknews.score}</td>
  </tr>
);

export default class ViewNews extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [], currentPage: 1, newssPerPage: 3 };
    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: last
    });
  }

  handleFirstClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: 1
    });
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    Axios.get("/api/hackernewboards")
      .then(response => {
        this.setState({ news: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  noteList() {
    return this.state.news.map(function(currentNews, i) {
      return <HackNews hacknews={currentNews} key={i} />;
    });
  }

  render() {
    let { news, currentPage, newsPerPage } = this.state;
    let indexOfLastPage = currentPage * newsPerPage;
    let indexOfFirstPage = indexOfLastPage - newsPerPage;
    let currentNews = news.slice(indexOfFirstPage, indexOfLastPage);
    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(news.length / newsPerPage);
    next = last === currentPage ? currentPage : currentPage + 1;
    let pageNumbers = [];
    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <h3>Top 20 stories from Hacker News</h3>
        <table className="table  table-hover" style={{ marginTop: 20 }}>
          <thead className="thead-dark">
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Link</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{this.noteList()}</tbody>
        </table>
        <ul id="page-numbers">
          <nav>
            <Pagination>
              <PaginationItem>
                {prev === 0 ? (
                  <PaginationLink disabled>First</PaginationLink>
                ) : (
                  <PaginationLink
                    onClick={this.handleFirstClick}
                    id={prev}
                    href={prev}
                  >
                    First
                  </PaginationLink>
                )}
              </PaginationItem>
              <PaginationItem>
                {prev === 0 ? (
                  <PaginationLink disabled>Prev</PaginationLink>
                ) : (
                  <PaginationLink
                    onClick={this.handleClick}
                    id={prev}
                    href={prev}
                  >
                    Prev
                  </PaginationLink>
                )}
              </PaginationItem>
              {pageNumbers.map((number, i) => (
                <Pagination key={i}>
                  <PaginationItem
                    active={
                      pageNumbers[currentPage - 1] === number ? true : false
                    }
                  >
                    <PaginationLink
                      onClick={this.handleClick}
                      href={number}
                      key={number}
                      id={number}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              ))}

              <PaginationItem>
                {currentPage === last ? (
                  <PaginationLink disabled>Next</PaginationLink>
                ) : (
                  <PaginationLink
                    onClick={this.handleClick}
                    id={pageNumbers[currentPage]}
                    href={pageNumbers[currentPage]}
                  >
                    Next
                  </PaginationLink>
                )}
              </PaginationItem>

              <PaginationItem>
                {currentPage === last ? (
                  <PaginationLink disabled>Last</PaginationLink>
                ) : (
                  <PaginationLink
                    onClick={this.handleLastClick}
                    id={pageNumbers[currentPage]}
                    href={pageNumbers[currentPage]}
                  >
                    Last
                  </PaginationLink>
                )}
              </PaginationItem>
            </Pagination>
          </nav>
        </ul>
      </div>
    );
  }
}
