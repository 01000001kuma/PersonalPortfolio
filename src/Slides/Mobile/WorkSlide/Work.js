import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'IMentor',
        projectDesc: 'IMentor is a project developed in React and its ecosystem to help students get in touch with senior students and help each other in this challenging journey to become a software developer.',
        projectType: 'React MongoDB Axios.io SCSS',
        roles: ['Full Stack Developer'],
      },
      {
        number: '02',
        projectName: 'Spotify API',
        projectDesc: 'A CRUD Api based on Spotify database.',
        projectType: 'JavascriptES6 Node.js Express.js',
        roles: ['Back-end Developer'],
      },
      {
        number: '03',
        projectName: 'IronNutrition',
        projectDesc: 'A React app with its own database filled with food and its nutritional value.',
        projectType: 'React MongoDB',
        roles: ['Full Stack Developer'],
      },
      {
        number: '04',
        projectName: 'NewsFeed',
        projectDesc: 'A CRUD API backend project where users fetch articles based on their favorite categories, such as: General, Business, Entertainment, Health, Science, and Sports.',
        projectType: 'JavascriptES6 MongoDB Express',
        roles: ['Back-end Developer'],
      },
      {
        number: '05',
        projectName: 'RandomBeers',
        projectDesc: 'React app with its own database focused on the documentation of a large variety of beers from around the world.',
        projectType: 'React MongoDB',
        roles: ['Full Stack Developer'],
      },
      {
        number: '06',
        projectName: 'Wach-A-Politic',
        projectDesc: 'A web-based game where Spanish corrupt politics are splashed once they want to get out of the parliament, a Whac-A-Mole type of game with a twisted narrative and anarchist feeling.',
        projectType: 'JavascriptES6 Canva CSS3',
        roles: ['Front-end Developer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
