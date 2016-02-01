package nz.govt.moh.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import nz.govt.moh.model.CAMModel;

@RestController
public class CamController {
	@RequestMapping("/getCAMs")
	public List<CAMModel> getAllCAMs(Principal user) {
		List<CAMModel> camList = new ArrayList<CAMModel>();
		
		for(int i =0 ;i<10;i++){			
			CAMModel cam = new CAMModel();
    		cam.LeName = user.getName();
    		cam.PremiseName = "Premise 1";
    		cam.AuditStatus = "In Progress";
    		cam.CamName = "CAM 1";
    		cam.CamStatus = "Response Required";
    		camList.add(cam); 		
		}
    	   	
         return camList;
	}	
	
}
