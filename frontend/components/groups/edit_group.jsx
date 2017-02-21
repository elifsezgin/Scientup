import React from 'react';
import {withRouter} from 'react-router';

class EditGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.group.id,
      title: this.props.group.title,
      description: this.props.group.description,
      image_url: this.props.group.image_url,
      city_name: this.props.group.city_name,
      lat: null,
      lon: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
    this.props.requestGroup(parseInt(this.props.params.groupId));
  }

  componentWillReceiveProps (newProps) {
    if (this.props.group !== newProps) {
      this.setState({
        id: newProps.group.id,
        title: newProps.group.title,
        description: newProps.group.description,
        image_url: newProps.group.image_url,
        city_name: newProps.group.city_name,
        lat: null,
        lon: null
      });
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.image_url) {
      this.props.addImage(this.state.image_url);
    } else {
      this.state.image_url = "http://res.cloudinary.com/datsbxfvs/image/upload/v1487701020/2560x1440-black-solid-color-background_skmvjw.jpg";
    }
    const group = Object.assign({}, this.state);
    this.props.updateGroup(group).then((data)=> {
      this.props.router.push(`groups/${data.group.id}`);
    });
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  updateImage(event) {
    this.setState({image_url: event.target.value});
  }

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'XXXXXXX',
        upload_preset: 'XXXXXXX',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if (errors === null) {
          let image_url = imageInfo[0].url;
        }
      }
    );
  }

  renderErrors() {
    let errors = null;
    if (this.props.errors) {
      errors = (<ul className='auth-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>);
    }
    return(errors);
  }

  render () {
    window.props = this.props;
    const placeholderCityName = (this.props.cityName) ? (this.props.cityName) : 'San Francisco';
    return (
      <div>
          <form className='group-creation-form'>
            {this.renderErrors()}

            <h6>FIRST STEP</h6>

            <label className='group-creation-labels'>
              <i className="fa fa-globe icons" aria-hidden="true"></i>
              What is your new Scientup Group's hometown?</label>
              <input className="group-creation-input"
                     type="text"
                     value={this.state.city_name}
                     placeholder={placeholderCityName}
                     onChange={this.update('city_name')}/>

                   <h6>SECOND STEP</h6>
            <label className='group-creation-labels'>
              <i className="fa fa-flask icons" aria-hidden="true"></i>
              What will be the name of your Scientup Group?</label>
              <input className="group-creation-input"
                     type="text"
                     value={this.state.title}
                     placeholder={`Geneticists in ${placeholderCityName}`}
                     onChange={this.update('title')}/>
                   <h6>THIRD STEP</h6>
            <label className='group-creation-labels'>
              <i className="fa fa-pencil-square-o icons" aria-hidden="true"></i>
              Describe who should join, and what your Scientup Group will do.</label>
            <textarea className="group-creation-input"
                     value={this.state.description}
                     placeholder="Your description here"
                     onChange={this.update('description')} ></textarea>
                   <h6>FOURTH STEP</h6>
           <label className='group-creation-labels'>
             <i className="fa fa-camera icons" aria-hidden="true"></i>
             Upload a photo for your Scientup Group. (You can upload anytime you want)</label>
            <input className="group-creation-input"
                type="text"
                value={this.state.image_url}
                placeholder="Copy & Paste image url or Drag & Drop the image."
                onChange={this.updateImage} />

            <input className="group-creation-button"
                   type="submit"
                   onClick={this.handleSubmit}
                   value="Update Scientup"/>
                   <br/>

            <br/><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(EditGroup);
