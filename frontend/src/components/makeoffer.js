import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './style/cardetails.css'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import axios from 'axios'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setname] =React.useState('')
  const [email, setemail] =React.useState('')
  const [phone, setphone] =React.useState('')
  const [offerprice, setofferprice] =React.useState('')



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =()=>{

    axios.post('http://localhost:5000/api/createOffer', {
      name: name,
      email: email,
      phone: phone,
      offerprice: offerprice
    }).then(res=>{
      if(res){
        alert("Offer Submitted")
      }
    })

  }



  return (
    <div>
      <Button style={{

        backgroundColor: "black",
        padding: "18px 36px",
        fontSize: "12px",
        width: "350px",
        display:"block",
        margin: "auto",
        marginTop:"15px"
    }} variant="outlined" onClick={handleClickOpen}>
        Make a Ofer Price
      </Button>
      <Dialog

       open={open} onClose={handleClose}>
        <DialogTitle
        style={{backgroundColor:"black",
                color: 'white',
                fontSize: '20px',
                paddingLeft: "80px"
      }}> <MonetizationOnIcon/> Offer Price</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            style={{width: '500px', marginLeft:"30px", marginTop:'30px'}}
            onChange={(e)=>{setname(e.target.value)}}


          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            variant="outlined"
            style={{width: '500px', marginLeft:"30px"}}
            onChange={(e)=>{setemail(e.target.value)}}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="number"
            variant="outlined"
            style={{width: '500px', marginLeft:"30px"}}
            onChange={(e)=>{setphone(e.target.value)}}

          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Trade Price"
            type="number"
            variant="outlined"
            style={{width: '500px', marginLeft:"30px",}}
            onChange={(e)=>{setofferprice(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button
          style={{backgroundColor: "red", marginRight:"15px", marginBottom:"30px", padding:'15px', width:'100px'}}
           onClick={handleClose}>Cancel</Button>
          <Button
          style={{backgroundColor: "black", marginRight:"40px", marginBottom:"30px", padding:'15px', width:'100px'}}
          onClick={handleSubmit}>Offer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
