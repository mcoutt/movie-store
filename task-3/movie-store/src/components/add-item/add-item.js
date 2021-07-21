import React from 'react';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './add-item.scss';

function rand() {
  return Math.round(0.2198524788701166 * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height: 800,
    backgroundColor: '#232323',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  submit: {
    // margin: theme.spacing(15),
    marginLeft: 422,
    // marginTop: 120,
    color: '#ffffff',
    backgroundColor: '#f65261',
    width: 150,
    height: 55
  },
  reset: {
    marginLeft: 122,
    marginTop: 50,
    color: '#ffffff',
    backgroundColor: '#f65261',
    width: 150,
    height: 55
  },
}));

export default function AddItem() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedGenre, setSelectedGenre] = React.useState({genre: ''});
  const [submitForm, setSubmit] = React.useState();
  const [resetForm, setReset] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const  handleGenreChange = (event) => {
    setSelectedGenre(event.target.genre);
  };

  const handleReset = (event) => {
    setReset(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    setSubmit(event.target.value);
    alert('Results: ' + submitForm);
    event.preventDefault();
  };

  const body = (
    <form>
      <div style={modalStyle} className={classes.paper}>
        <div className='add'>
          <label>ADD MOVIE</label>
        </div>
        <div>
          <label>
            <p className='titles'>TITLE</p>
            <input type='text' name='title' className='input-data-area placeholders' placeholder='Moana'/>
          </label>
        </div>
        <div>
          <label>
            <p className='titles'>RELEASE DATE</p>
            <div className='input-data-area placeholders'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </label>
        </div>
        <div>
          <label>
            <p className='titles'>MOVIE URL</p>
            <input type='text' name='movie_url' className='input-data-area placeholders' placeholder='Movie URL here'/>
          </label>
        </div>
        <div>
          <label>
            <p className='titles'>GENRE</p>
            <select value={selectedGenre} onChange={handleGenreChange} className='input-data-area placeholders'>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option value="coconut">Кокос</option>
              <option value="mango">Манго</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <p className='titles'>OVERVIEW</p>
            <input type='text' name='overview' className='input-data-area placeholders' placeholder='Overview here'/>
          </label>
        </div>
        <div>
          <label>
            <p className='titles'>RUNTIME</p>
            <input type='text' name='runtime' className='input-data-area placeholders' placeholder='Runtime here'/>
          </label>
        </div>
        <div>
          <Button variant="outlined" size="large" className={classes.reset}  onClick={handleReset} value={resetForm}>
            RESET
          </Button>
          <Button variant="contained" size="large" className={classes.submit} onClick={handleSubmit} value={submitForm}>
            SUBMIT
          </Button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <button type="button" className='header-button' onClick={handleOpen}>
        + ADD MOVIE
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
