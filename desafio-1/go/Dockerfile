FROM golang:latest as builder

WORKDIR /usr/src/app

COPY . .

RUN go build -v -o /app hello-fullcycle.go

FROM scratch

COPY --from=builder /app /app

CMD ["/app"]