import Alert from 'react-bootstrap/Alert';

function Profile(props) {
  return (
    <div>

      <h1>{props.fullName}</h1>
      <h2>{props.bio} - {props.profession}</h2>
      

    </div>
  )
}

export default Profile

export function hundle() {
  return (
    <>
      {
        <Alert>
        <Alert.Heading>This page is open with </Alert.Heading>
        
        
      </Alert>
      }
    </>
  )
}
