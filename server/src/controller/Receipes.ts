import { Receipe } from "../model/Receipe";
import { Request, ResponseToolkit } from "@hapi/hapi";
const mockReceipe: Receipe = {
  description: "Receipe 1",
  ingredients: [{
    uid: "548b8f51-8735-4ebd-895c-b6be074af53e",
    name: "Paprika",
    created: new Date(),
    updated: new Date()
  }],
  name: "Paprika soup",
  uid: "some-id",
  created: new Date(),
  updated: new Date()
};

export function getAllReceipes(): Receipe[] {
  const receipes: Receipe[] = [
    mockReceipe
  ]
  return receipes;
}

export function getReceipeById(id: Number) {
  return mockReceipe;
}
