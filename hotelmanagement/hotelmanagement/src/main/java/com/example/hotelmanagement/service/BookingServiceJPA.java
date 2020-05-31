package com.example.hotelmanagement.service;

import org.springframework.data.repository.CrudRepository;

import com.example.hotelmanagement.entity.Booking;

public interface BookingServiceJPA extends CrudRepository<Booking,Long> {

}
