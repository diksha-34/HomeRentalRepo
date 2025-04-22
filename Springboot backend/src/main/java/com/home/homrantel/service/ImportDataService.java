package com.home.homrantel.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.home.homrantel.entities.housedata;
import com.home.homrantel.repo.HouseRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImportDataService {

    @Autowired
    private HouseRepository houseRepository;

    @Transactional
    public void importHouseData(String csvFilePath) {
        List<housedata> houses = new ArrayList<>();
        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath))) {
            String[] line;
            while ((line = reader.readNext()) != null) {
                housedata house = new housedata(
                        Integer.parseInt(line[0].trim()), line[1].trim(), line[2].trim(), line[3].trim(),
                        line[4].trim(), line[5].trim(), line[6].trim(), line[7].trim(),
                        line[8].trim(), line[9].trim(), line[10].trim(), line[11].trim(),
                        line[12].trim(), line[13].trim().substring(0,50), line[14].trim()
                );
                houses.add(house);

                // Insert in batches (adjust batch size based on your DB)
                if (houses.size() >= 1000) {
                    houseRepository.saveAll(houses);
                    houseRepository.flush();
                    houses.clear();  // clear the list to avoid memory issues
                }
            }

            // Insert any remaining records
            if (!houses.isEmpty()) {
                houseRepository.saveAll(houses);
                houseRepository.flush();
            }
        } catch (IOException | CsvValidationException e) {
            throw new RuntimeException("Error reading or parsing CSV file: " + csvFilePath, e);
        }
    }

}
