import React from "react";
interface props {
  location: { state: any };
  history: { push: any };
}

class Detail extends React.Component<props> {
  componentDidMount() {
    const { location, history } = this.props; // props which come from <Link to={{...}} and inside {...}, there is many things like location which our state is located
    if (location.state === undefined) {
      history.push("/"); // inside history, there is push fucntion whcich allows me to be redirected to the main page
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
