import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { motion } from "framer-motion";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(250deg, #7b2ff7, #f107a3)'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const List = ({ people,setPeople }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selImage,setSelImage]=useState(null);

  const openModal = (e) => {
    console.log(e.target.src)
    setIsOpen(true);
    setSelImage(e.target.src);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete=(e)=>{
    console.log(e.target.id)
    setPeople(people.filter(obj=>obj.id!=e.target.id))
  }

  console.log(people);
  return (
    <>
      <div className="d-flex justify-content-around p-2 flex-wrap">
        {people.length==0 && <div className="text-white">...today no more events</div>} 
        {people.map((obj) => (
          <div className="mt-2  " key={obj.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={obj.image}
                  alt={obj.name}
                  onClick={openModal}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {obj.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    age:{obj.age}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <motion.span whileHover={{ scale: 1.4 }}>
                  <Button size="small" color="primary" id={obj.id} onClick={handleDelete}>
                    delete
                  </Button>
                </motion.span>
              </CardActions>
            </Card>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
               <Button size="small" onClick={closeModal} color="primary">close</Button>
              <div >
                <img className="modalImg" src={selImage} alt="" />
              </div>
              
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};
