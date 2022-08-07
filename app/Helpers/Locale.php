<?php


namespace App\Helpers;

use Illuminate\Support\Facades\Cache;

class Locale
{
  private string $KEY = 'LOCALE_FILE';

  public function getContent(bool $forceClear = false)
  {
    if ($forceClear) $this->forceClear();

    return Cache::get($this->KEY) ?:
      Cache::forever($this->KEY, $this->getTranslationFile());
  }

  public function forceClear()
  {
    return Cache::forget($this->KEY);
  }

  function getTranslationFile()
  {
    $path = app_path('../lang/' . app()->getLocale() . '.json');
    $content = \file_get_contents($path);

    return \json_decode($content);
  }
}
