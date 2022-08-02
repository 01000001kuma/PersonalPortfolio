import React, { Component } from 'react';
import styled from 'styled-components';
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
    this.pageSplitTimes = 1.4;
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
        projectDesc: 'A tool for Ironhack Students to connect to their seniors and help them on their new coding journey.',
        projectType: 'React.js MongoDB Axios.io ',
        roles: ['Full Stack Developer'],
      },
      {
        number: '02',
        projectName: 'IronFeeds',
        projectDesc: 'IronFeeds is a CRUD API backend project where users fetch news based on their favorite categories, such as: General, Business, Entertainment, Health, Science, and Sports.',
        projectType: 'JavascriptES6 MongoDB Express',
        roles: ['Full Stack Developer'],
      },
      {
        number: '03',
        projectName: 'Wach-A-Politic',
        projectDesc: 'Web-based game where Spanish corrupt politics are splashed once they want to get out of the parliament, a Whac-A-Mole type game with a twisted narrative and anarchist feeling.',
        projectType: 'JavascriptES& Canva HTML CSS',
        roles: ['Front-end Developer', 'UI Designer'],
      },
      // {
      //   number: '04',
      //   projectName: 'Tesla app',
      //   projectDesc: 'iOS app concept to control Tesla cars remotely.',
      //   projectType: 'iOS APP CONCEPT',
      //   roles: ['UI Designer'],
      // },
      // {
      //   number: '05',
      //   projectName: 'Video portal',
      //   projectDesc: 'Internal video portal to deliver news to employees all over the world.',
      //   projectType: 'WEB APP',
      //   roles: ['Full Stack Developer', 'UI Designer'],
      // },
      // {
      //   number: '06',
      //   projectName: 'Voistrap demo',
      //   projectDesc: 'Web app project to give workplace insights using indoor localization, voice and schedule.',
      //   projectType: 'WEB APP',
      //   roles: ['Full Stack Developer', 'UI Designer'],
      // },
      // {
      //   number: '',
      //   projectName: '',
      //   projectDesc: '',
      //   projectType: '',
      //   roles: [''],
      // },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
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
