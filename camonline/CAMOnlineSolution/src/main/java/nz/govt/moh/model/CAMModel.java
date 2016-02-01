package nz.govt.moh.model;

public class CAMModel {
	public String LeName;
	public String PremiseName;
	public String AuditStatus;
	public String CamName;
	public String CamStatus;

	public String getLeName() {
		return LeName;
	}

	public void setLENAme(String leName) {
		LeName = leName;
	}

	public String getPremiseName() {
		return PremiseName;
	}

	public void setPremisename(String premiseName) {
		PremiseName = premiseName;
	}

	public String getAuditStatus() {
		return AuditStatus;
	}

	public void setAuditName(String auditStatus) {
		AuditStatus = auditStatus;
	}

	public String getCamName() {
		return CamName;
	}

	public void setCamName(String camName) {
		CamName = camName;
	}

	public String getCamStatus() {
		return CamStatus;
	}

	public void setCriterion(String camStatus) {
		CamStatus = camStatus;
	}
}
