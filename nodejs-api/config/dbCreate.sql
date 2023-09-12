CREATE TABLE sales (
    transaction_type smallint not null, 
    transaction_date date not null, 
    product text not null, 
    value money not null, 
    seller text not null
);