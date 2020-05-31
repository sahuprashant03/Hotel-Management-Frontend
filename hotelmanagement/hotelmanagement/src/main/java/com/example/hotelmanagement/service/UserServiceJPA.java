package com.example.hotelmanagement.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.hotelmanagement.entity.Customer;
@Repository
public interface UserServiceJPA extends CrudRepository<Customer, Long>{

}
