package com.home.homrantel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.home.homrantel.repo.HouseRepository;

@Component
public class DataLoaderBean implements CommandLineRunner {

    @Autowired
    private ImportDataService importDataService;

    @Autowired
    private HouseRepository houseRepository;

    @Override
    public void run(String... args) throws Exception {
        if (houseRepository.count() == 0) {
            String csvFilePath = "src/main/resources/Rental_Data.csv"; // Adjust path if needed
            importDataService.importHouseData(csvFilePath);
        }
    }
}
