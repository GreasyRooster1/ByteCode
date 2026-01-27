import {API_URL} from "../constants.js";
import {useState} from "react";

//quickly build a request handler for the backend
function authReq(uri, method, func){
    //args for the request
    return async (authToken,reqArgs,setReqState) => {
        let argsUri;
        if(reqArgs===null){
            argsUri = "";
        }else {
            argsUri = "/" + reqArgs.join("/");
        }
        if(setReqState===undefined){
            setReqState = ()=>{}
        }
        try {
            const response = await fetch(API_URL + uri + argsUri,{
                method: method,
                headers: {
                    "Authorization":authToken
                }
            })
            if (!response.ok) {
                setReqState({
                    isLoading:false,
                    isError:true,
                    error:response.message,
                });
                return response;
            }else{
                setReqState({
                    isLoading:false,
                    isError:false,
                    error:null,
                });
            }
            return await func(response,reqArgs);
        } catch (err) {
            setReqState({
                isLoading:false,
                isError:true,
                error:err,
            });
            console.error(err)
        }
    };
}

function jsonReq(uri){
    return authReq(uri,"GET", async (response)=>{
        return await response.json();
    })
}

function passFailReq(uri){
    return authReq(uri,"GET", async (response)=>{
        return response.ok;
    })
}

function postReq(uri){
    return authReq(uri,"POST", async (response)=>{
        return await response;
    })
}

function fileReq(uri){
    return authReq(uri,"GET", async (response)=>{
        return response.blob();
    })
}

function noArgReq(uri){
    let reqFunc = authReq(uri,"GET", async (response)=>{
        let t = response.text()
        console.log(t);
        return t;
    })
    return function(authToken,setReqState){
        return reqFunc(authToken,null,setReqState);
    }
}

function uploadReq(uri){
    return async (authToken,reqArgs,body,setReqState) => {
        let argsUri = "/" + reqArgs.join("/");
        if(setReqState===undefined){
            setReqState = ()=>{}
        }
        try {
            const response = await fetch(API_URL + uri + argsUri,{
                method: "POST",
                headers: {
                    "Authorization":authToken
                },
                body:body,
            })
            if (!response.ok) {
                setReqState({
                    isLoading:false,
                    isError:true,
                    error:response.message,
                });
            }else{
                setReqState({
                    isLoading:false,
                    isError:false,
                    error:null,
                });
            }
            return response;
        } catch (err) {
            setReqState({
                isLoading:false,
                isError:true,
                error:err,
            });
            console.error(err)
        }
    };
}

function useReqState(){
    return useState({
        isLoading: true,
        isError: false,
        error: null,
    })
}

export {authReq,jsonReq,fileReq,useReqState,uploadReq,noArgReq,postReq,passFailReq};