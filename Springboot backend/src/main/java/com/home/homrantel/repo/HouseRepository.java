package com.home.homrantel.repo;

import com.home.homrantel.entities.housedata;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface HouseRepository extends JpaRepository<housedata, Integer> {

    @Query("SELECT h FROM housedata h WHERE h.city = :city AND h.price BETWEEN :minPrice AND :maxPrice")
    Page<housedata> findByCityAndPriceBetween(
            @Param("city") String city,
            @Param("minPrice") String minPrice,
            @Param("maxPrice") String maxPrice,
            Pageable pageable
    );

    @Query("SELECT h FROM housedata h WHERE h.city = :city")
    Page<housedata> findByCity(@Param("city") String city, Pageable pageable);

    @Query("SELECT h FROM housedata h WHERE h.price BETWEEN :minPrice AND :maxPrice")
    Page<housedata> findByPriceBetween(
            @Param("minPrice") String minPrice,
            @Param("maxPrice") String maxPrice,
            Pageable pageable
    );

    @Query("Select distinct city from housedata asc")
    ArrayList<String> getAllCities();

}
