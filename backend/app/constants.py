from enum import Enum


class DocumentTypeEnum(str, Enum):
    CHARGING_STATION_INSTALL_REPORT = "charging_station_install_report"


class FileExtension(str, Enum):
    CSV = ".csv"
