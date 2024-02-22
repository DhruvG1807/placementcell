import { ApiError } from "./ApiError"
import {Student} from "../models/student.model.js"

const generateAccessAndRefreshTokens = async(enrollmentNumber) =>{
    try {
        const user = await Student.findById(enrollmentNumber)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken};

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

export default generateAccessAndRefreshTokens;