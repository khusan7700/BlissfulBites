import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
    //LOGIC
    //servise model
    //...
    //res.send | json | rediract | end | render ==> respons turlari
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

//-------------------------------GET.SIGNUP--------------------------------------------

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

//-------------------------------GET.LOGIN--------------------------------------------

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("gologin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, GetLogin:", err);
  }
};

//-------------------------------POST.SIGNUP--------------------------------------------
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO TOKENS SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

//-------------------------------POST.LOGIN--------------------------------------------

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    //TODO TOKENS SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, processlogin:", err);
    res.send(err);
  }
};

export default restaurantController;
