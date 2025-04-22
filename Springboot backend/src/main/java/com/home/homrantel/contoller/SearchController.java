package com.home.homrantel.contoller;

import com.home.homrantel.entities.housedata;
import com.home.homrantel.repo.HouseRepository;
import com.home.homrantel.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@RestController
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<Page<housedata>> findHouseByCityAndPrice(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String minPrice,
            @RequestParam(required = false) String maxPrice,
            @RequestParam(value = "pageNumber",defaultValue = "10", required = false) Integer pageNumber,
            @RequestParam(value = "pageSize",defaultValue = "1", required = false) Integer pageSize ){
            
        try {
            System.out.println("here in house and price");
            Page<housedata> houses = searchService.getAllHousesByCityAndPrice(city, minPrice, maxPrice, pageNumber, pageSize);
            if (houses.isEmpty()) {
                return ResponseEntity.noContent().build(); // Return 204 No Content if no houses found
            }
            return ResponseEntity.ok(houses);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Handle internal server error
        }
    }

    @Autowired
    HouseRepository houseRepository;

    @GetMapping("/cities")
    public ResponseEntity<Set<String>> getAllCities(){
        ArrayList<String> cities = houseRepository.getAllCities();
        Set<String> set = new HashSet<>();
        for(int i = 0;i<cities.size();i++){
            set.add(cities.get(i));
        }
        return new ResponseEntity(set,HttpStatus.OK);
    }
}
