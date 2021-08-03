import React from "react";
import { useLoader } from "react-three-fiber";

import {
  TextureLoader,
  RepeatWrapping,
  Shape,
  ExtrudeGeometry,
  BoxGeometry,
  MeshStandardMaterial,
  CylinderGeometry,
  MeshBasicMaterial,
} from "three";

import ClothTextureURL from "../assets/cloth.jpg";
import WoodTextureURL from "../assets/floor.jpg";
