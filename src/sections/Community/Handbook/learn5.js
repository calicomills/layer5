import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import Bullet from "./images/active.png";
import {Link} from "gatsby";
import TOC from "../../../components/handbook-navigation/index";

const LearnWrapper = styled.div`
    padding: 3rem 20rem;
    margin-top: -30rem; 
    h1{
      color:black;
      margin-bottom: 2rem;
      font-size: 40px;
    }
    h2{
      color:black;
      margin-bottom: 1rem;
      font-size: 30px;
    }
    p{
      margin: 1rem 0;
    }
    .source{
      margin-left:3rem;
      z-index: 999;
    }
    .bullet{
      width: 15px;
    }
    .logo{
      width: 25px;
    }
`;

const LearnLayer= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community Handbook</h1>
      </div>  
      <TOC />
      <LearnWrapper>
        <h1>Learn Layer5</h1>  
        <h2>Learn</h2>
        <p>As a community, we have put together good learning materials and resources to guide you through learning about service meshes.</p>
        <p>The resource includes:</p>
        <div className="source">
          <li><Link to="/learn">Service Mesh Training.</Link></li>
          <li><Link to="/learn/service-mesh-labs">Learn how to service mesh with interactive labs.</Link></li>
          <li><Link to="/learn/service-mesh-books">Books.</Link></li>
          <li><Link to="/learn/service-mesh-workshops">Workshops.</Link></li>
          <li><a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA/playlists">Layer5  youtube playlist.</a></li>
        </div>
        <p>These materials were created to be interactive, easy to use, and free for all.</p>

        <h2>Events</h2>
        <p>At Layer5, we participate in international events, online workshops, and also meetups( both small and large). They all vary in topics ranging from cloud-native management, service mesh, DevOps, and open-source. In these events,  more awareness about the Layer5 projects and the community is created.
        </p>
        <p>Check out <Link to="/community/events">Layer5 events</Link> to participate in any of the latest events.</p>

        <h2>Blogs</h2>
        <p>Visit our <Link to="/blog">Blog</Link> for the latest updates on Layer5</p>
        
      </LearnWrapper>        
    </HandbookWrapper>
  );
};
  
export default LearnLayer;