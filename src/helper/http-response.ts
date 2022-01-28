import { IHttpResponse } from "../adapter/http-adapter/http-adapter";

export const ok = (data: any): IHttpResponse => ({
    statusCode: 200,
    body: data
  })

export const created = (data: any): IHttpResponse => ({
    statusCode: 201,
    body: data
  })