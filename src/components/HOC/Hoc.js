import React from "react";
import axios from "axios";

const Hoc = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: ""
    };

    componentDidMount() {
      const fetchData = async () => {
        const data = await axios
          .get(`https://jsonplaceholder.typicode.com/${entity}`)
          .catch((error) => {
            console.log(error);
          });
        console.log(data);
        this.setState({ ...this.state, data: data.data });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      const filterData = data.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });

      return (
        <div>
          <h2>{entity}</h2>

          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filterData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default Hoc;
