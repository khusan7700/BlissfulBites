import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    //LOGIC
    //servise model
    //...
    //res.send | json | rediract | end | render ==> respons turlari
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
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
//-------------------------------GET.SIGNUP--------------------------------------------

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};
//-------------------------------POST.LOGIN--------------------------------------------

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processlogin:", err);
    res.send(err);
  }
};
//-------------------------------POST.SIGNUP--------------------------------------------
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};
export default restaurantController;
