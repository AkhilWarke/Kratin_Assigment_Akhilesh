

                                                 // Informatiom of Respository
package com.app.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojo.MedicalDetails;



// Actual logic of Coding
public interface InfoRepository extends JpaRepository<MedicalDetails, Integer> 
{
    List<MedicalDetails> findByUserId(int userId);
}
