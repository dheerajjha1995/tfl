import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";
import { Drawer } from "@mui/material";
import Description from "./Description";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Card = ({id, category, image, name, vid, detail}) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div>
      <div className = "close">
        <Button onClick={toggleDrawer('bottom', false)} variant="contained" color="error">
          <CloseIcon/>
        </Button>
      </div>
      <Description
        image={image}
        name={name}
        category={category}
        id={id}
        vid={vid}
        detail={detail}
      />
      <div className = "close2">
        <Button onClick={toggleDrawer('bottom', false)} variant="contained" color="error">
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list()}
          </Drawer>
        ))}
      </div>

      <div className="card__image">
        <img
          onClick={toggleDrawer('bottom', true)}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
        />
      </div>
      
      <div className="productDet">
        <div className="card__details">
          <p className="title">{name}</p>
          <p>Short description</p>
        </div>
        <div className="card__size">
          <p>
            Class: {category}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Card;