import { Response } from "express";


export const handleError = (res: Response, error: any)=>{
console.error("lỗi dữ liệu: ", error);


if(error.code === 11000){
    return res.status(409).json({message: "loi trung du lieu"});
}

if(error.name === "ValidationError"){
return res.status(400).json({message: "loi, chua nhap day du thong tin"});
}

return res.status(500).json({message: "da xay ra loi khong xac dinh"});

}