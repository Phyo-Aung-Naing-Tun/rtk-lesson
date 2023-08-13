import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlide";
const ProductCard = (props) => {
  const { title, image, price } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <div className=" w-[200px] shadow-lg p-3 ">
        <div className=" w-full h-[150px]">
          <img className="h-[150px] w-full object-contain" src={image} />
        </div>
        <Text className="mb-2" weight={500}>
          {title?.substring(0, 15)}...
        </Text>

        <Badge color="grape" className=" text-[14px]" variant="light">
          $ {price}
        </Badge>

        <Button
          onClick={() => dispatch(addToCart(props))}
          className=" bg-purple-600 text-white"
          variant="light"
          color="grape"
          fullWidth
          mt="md"
          radius="md"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
