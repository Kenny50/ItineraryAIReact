import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    height: 100vh;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    padding: 20px;
    border-radius: 5px;
    p {
        margin: 0 0 20px;
    }
`;


export default function AboutUs() {
  return (
    <Container>
      <p>It is important to note that the website is currently in its prototype stage and is testing out the demand for this feature.</p>

      <p>The website is currently integrating with Open AI to provide this feature. The current version of the website is not responsible for the accuracy of the generated itinerary. However, the team behind the website is working hard to develop a new and reliable model that can provide the users with accurate and efficient results.</p>
      
      <p>The website offers users the convenience of generating an itinerary in a matter of seconds. Users can simply input their travel dates and destination, and the website's algorithm will provide them with a customized itinerary based on their preferences.</p>
      
      <p>The website might provide more setup like account the user's budget, interests, and preferred mode of transportation to create a customized itinerary that suits their needs.</p>
      
      <p>It is important to note that the website is still in its testing phase, and users may encounter some bugs or inaccuracies in the generated itinerary. However, the team is continuously working on improving the website and making it more reliable for the users.</p>
      
      <p>To stay updated on the latest developments and updates regarding the website, users can sign up for the email list. This will enable them to receive regular updates and notifications about the website's progress and new features.</p>
    </Container>    
  )
}
