import React from 'react'

const Login = () => {
    return (
        <div>
            <span>
                <img src="./images/logo_new.jpg" class="w-20 sm:w-36 mt-4" alt="" />
            </span>
            <div class=" flex flex-row justify-center">
                <div class="flex justify-center items-center ">
                    <div>
                        <p class="text-primary text-lg font-medium text-center m-0"><u>Hello Admin!</u></p>
                        <h1 class="text-primary m-0 text-3xl font-bold text-center mb-6">Welcome Back</h1>
                        <div class="bg-secondary h-96 flex flex-row items-center shadow-md rounded-md p-10">
                            <div class="sm:w-80">
                                <div
                                    class="d-flex justify-center items-center text-primary  m-0  text-3xl font-bold text-center">
                                    Log In
                                </div>
                                <div>
                                    <form action="">
                                        <div class="form-gruop mt-10">
                                            <label class="mb-4 font-medium pl-2">Email</label><br />
                                            <input type="text"
                                                class="bg-light_gray focus:ring-0 focus:outline-none h-8 w-full  border-[1px] rounded-[0.2rem] border-gray_light p-4"
                                                placeholder="Enter your Email" />
                                        </div>
                                        <div class="form-gruop mt-5">
                                            <label class="mb-4 font-medium pl-2">Password</label><br />
                                            <input type="password"
                                                class="bg-light_gray focus:ring-0 focus:outline-none h-8 w-full  border-[1px] rounded-[0.2rem] border-gray_light p-4" />
                                        </div>
                                        <button class="bg-primary text-white w-full rounded-[0.2rem] mt-8 p-1">
                                            <a class="no-underline w-full" href="#">Log
                                                In</a>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login